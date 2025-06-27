import React, { useEffect } from "react";

const ProposalPage = ({ gammaLink, title }) => {
  useEffect(() => {
    document.title = title ? `${title} | Glintaro` : "Glintaro - Partnership";
  }, [title]);

  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <iframe
        src={gammaLink}
        style={{ border: "none", width: "100%", height: "100%" }}
        allow="fullscreen"
        title={title}
      ></iframe>
    </div>
  );
};

export default ProposalPage;
