import React from "react";

export default function GrantsFunding() {
  const grants = [
    {
      amount: "Rs 1.1 Crore",
      detail: "Under ERP Mission, Project (NME-ICT), Govt. of India.",
    },
    {
      amount: "Rs 32.36 Lacs",
      detail: "Under XIIth Plan, equipment grant.",
    },
    {
      amount: "Rs 10 Lacs",
      detail:
        "Under UGC, Design and Analysis of Energy-aware Robust Scheduling (ERS) Models for Stochastic jobs under DAG constraints in uncertain environment.",
    },
  ];

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Header */}
      <header
        style={{
          backgroundColor: "#ffffff",
          borderBottom: "4px solid #004d40",
          borderRadius: "20px",
          padding: "10px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            src="https://amubuddy.com/wp-content/uploads/2023/06/amu-logo.jpg"
            alt="AMU Logo"
            style={{ height: "50px", width: "50px", objectFit: "contain" }}
          />
          <span
            style={{
              color: "#004d40",
              fontWeight: "bold",
              fontSize: "18px",
              whiteSpace: "nowrap",
            }}
          >
            Aligarh Muslim University
          </span>
        </div>
        <nav
          style={{
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          {["Home", "About", "Programs", "Faculty", "Contact"].map(
            (item, idx) => (
              <span
                key={idx}
                style={{
                  color: "#004d40",
                  fontWeight: "bold",
                  fontSize: "14px",
                  cursor: "pointer",
                }}
              >
                {item}
              </span>
            )
          )}
        </nav>
      </header>

      {/* Content */}
      <section
        style={{
          backgroundColor: "#f5f5f5",
          padding: "40px 10px",
          minHeight: "70vh",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            backgroundColor: "#ffffff",
            borderRadius: "20px",
            padding: "30px 20px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
            color: "#004d40",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "22px",
              fontWeight: "bold",
              marginBottom: "30px",
            }}
          >
            Grants and Funding
          </h2>

          <ul style={{ listStyle: "none", padding: 0, fontSize: "15px" }}>
            {grants.map((grant, index) => (
              <li
                key={index}
                style={{
                  marginBottom: "20px",
                  padding: "15px",
                  backgroundColor: "#e0f2f1",
                  borderRadius: "10px",
                }}
              >
                <strong>{grant.amount}:</strong> {grant.detail}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#ffffff",
          color: "#004d40",
          textAlign: "center",
          borderRadius: "20px",
          padding: "20px",
          borderTop: "4px solid #004d40",
          borderBottomLeftRadius: "25px",
          borderBottomRightRadius: "25px",
          fontSize: "14px",
        }}
      >
        © 2025 Aligarh Muslim University, Department of Computer Science.
      </footer>
    </div>
  );
}
