import React from "react";

interface Params {
  params: {
    slug: string[];
  };
}

export default function Docs({ params }: Params) {
  if (params.slug?.length === 2) {
    return (
      <h1>
        Viewsing docs for feature {params.slug[0]} and concept{" "}
        {params.slug[1]}
      </h1>
    );
  }
  if (params.slug?.length === 1) {
    return <h1>Viewsing docs for feature {params.slug[0]}</h1>;
  }
  return <h1>Docs home page</h1>;
}
