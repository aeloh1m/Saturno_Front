import React from "react";
import { Button } from "react-bootstrap";

const MercadoPagoLink = ({ open }) => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  if (!open) return null;

  return (
    <Button
      className="button"
      show={true}
      variant="primary"
      onClick={() =>
        openInNewTab(
          "https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c938084892b330d01892df4f4ca0165"
        )
      }
      target="_blank"
    >
      Activar Suscripción
    </Button>
  );
};

export default MercadoPagoLink;
