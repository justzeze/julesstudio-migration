"use client";

export function CalEmbed() {
  return (
    <div
      className="w-full overflow-hidden"
      style={{ borderRadius: "5px", height: "600px" }}
    >
      <iframe
        src="https://cal.com/julesstudio/appel-decouverte?embed=true&layout=month_view"
        title="Réserver un appel découverte"
        className="w-full h-full border-0"
        allow="payment"
      />
    </div>
  );
}
