export default function Loading({ isLoading }: { isLoading: boolean }) {
  return <>{isLoading ? <div>Loading</div> : null}</>;
}
