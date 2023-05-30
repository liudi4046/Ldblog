import React from "react";

export default function ErrorPage({ error }: { error: any }) {
  if (!error) {
    return <></>;
  }
  return <div>{error.message}</div>;
}
