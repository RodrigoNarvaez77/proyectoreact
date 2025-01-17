import React from "react";

const WhatsAppButton = () => {
  return (
    <div className="whatsapp-menu">
      <button className="btn-whatsapp" id="whatsappButton">
        <i className="bi bi-whatsapp"></i>
      </button>
      <div className="linktree" id="whatsappMenu">
        <ul className="list-group">
          <li className="list-group-item">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h5 className="branch-name">Casa Matriz</h5>
                <p className="branch-address">Condell 615, Arauco</p>
              </div>
              <a
                href="https://wa.me/+56976151892"
                className="btn btn-success btn-circle"
              >
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
          </li>
          {/* Repite para cada sucursal */}
        </ul>
      </div>
    </div>
  );
};

export default WhatsAppButton;
