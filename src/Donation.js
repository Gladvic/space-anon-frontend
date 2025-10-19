import React, { useState } from "react";

function Donation() {
  const [expanded, setExpanded] = useState(false);
  const [amount, setAmount] = useState("");

  const handleDonate = (customAmount) => {
    const finalAmount = customAmount || amount;
    if (!finalAmount || isNaN(finalAmount) || finalAmount <= 0) {
      alert("Please enter a valid donation amount");
      return;
    }
    window.open(`https://paypal.me/GladysIdahosa/${finalAmount}`, "_blank");
  };

  return (
    <div
      style={{
        background: "#181C3A",
        color: "#fff",
        borderRadius: "10px",
        padding: expanded ? "20px" : "10px",
        marginBottom: "15px",
        textAlign: "center",
        position: "fixed",     
        top: "10px",            
        right: "10px",          
        zIndex: 1000,           
        transition: "width 0.3s ease",
        width: expanded ? "300px" : "auto",
      }}
    >
      {!expanded ? (
        <button
          onClick={() => setExpanded(true)}
          style={{
            background: "#A362EA",
            color: "#fff",
            padding: "10px 18px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          💜 Support Space Anon
        </button>
      ) : (
        <>
          <h3>Support Space Anon 🚀</h3>
          <p style={{ fontSize: "0.9rem", color: "#C4C4C4" }}>
  Space Anon is free for everyone. Donations help keep our servers running, 
        improve moderation, and make sure the platform stays safe and anonymous. 
        Every contribution helps us stay online ❤️          </p>

          <div style={{ margin: "12px 0" }}>
            <button onClick={() => handleDonate(1)}>$1</button>
            <button onClick={() => handleDonate(10)} style={{ marginLeft: "8px" }}>$10</button>
            <button onClick={() => handleDonate(100)} style={{ marginLeft: "8px" }}>$100</button>
          </div>

          <div>
            <input
              type="number"
              placeholder="Custom amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              style={{
                padding: "6px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                marginRight: "8px",
              }}
            />
            <button onClick={() => handleDonate(null)}>Donate</button>
          </div>

          <div style={{ marginTop: "10px" }}>
            <button
              onClick={() => setExpanded(false)}
              style={{
                background: "transparent",
                border: "none",
                color: "#F48C8C",
                cursor: "pointer",
                marginTop: "10px",
              }}
            >
              Close ❌
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Donation;
