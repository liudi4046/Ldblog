import { motion, useSpring } from "framer-motion";

export const Card = ({ children, viewBlogDetail }: any) => {
  const mouseX = useSpring(0, { stiffness: 200, damping: 100 });
  const mouseY = useSpring(0, { stiffness: 200, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
    console.log(mouseX, mouseY);
  }

  return (
    <div
      onClick={viewBlogDetail}
      onMouseMove={onMouseMove}
      className="p-3 cursor-pointer overflow-hidden relative duration-700 border rounded-xl bg-zinc-950 group md:gap-8 border-zinc-600 w-[300px] h-[300px] "
    >
      <motion.div
        style={{
          position: "absolute",
          top: mouseY,
          left: mouseX,
          width: "80px",
          height: "80px",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          borderRadius: "50%",
          filter: "blur(60px)", // 使用 filter 属性增加模糊效果
          boxShadow: "0 0 20px 10px rgba(255, 255, 255, 0.2)", // 使用 boxShadow 属性增加微光效果
        }}
      />{" "}
      {children}
    </div>
  );
};
