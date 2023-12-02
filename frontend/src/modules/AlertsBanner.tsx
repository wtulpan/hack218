import "./Grid.css";
import "./AlertsBanner.css";

function AlertsBanner() {
  const alertList = ["Tryna smoke?", "No way!", "I'm Arjun!"];

  const alerts = alertList.map((alert, index) => (
    <div key={index}>{alert}</div>
  ));

  return (
    <div className="alerts-banner widget">
      <div className="widget-title">Alerts</div>
      <div className="alerts">{alerts}</div>
    </div>
  );
}

export default AlertsBanner;
