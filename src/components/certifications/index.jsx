import React from "react";
import "./certifications.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Certifications = () => {
  return (
    <section id="certifications">
      <h5>My Achievements</h5>
      <h2>Certifications</h2>
      <div className="container certifications__container">
        <article className="certification__details">
          <BsPatchCheckFill className="certification__icon" />
          <div>
            <h4>Kubernetes and Cloud Native Associate (KCNA)</h4>
            <small className="text-light">
              Issued by CNCF & The Linux Foundation
            </small>
            <p className="certification__summary">
              The KCNA certification demonstrates foundational knowledge and
              skills in Kubernetes and the cloud native ecosystem, including
              core concepts, architecture, and basic operations. It is ideal for
              those starting their journey in cloud native technologies. This
              certification is offered by the Cloud Native Computing Foundation
              (CNCF) in collaboration with The Linux Foundation.
            </p>
            <a
              href="https://www.credly.com/badges/21ea7a93-97c4-4241-a033-17c651f9e8ce/linked_in?t=sy9wqc"
              className="certification__verify"
              target="_blank"
              rel="noopener noreferrer"
            >
              Verify on Credly
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Certifications;
