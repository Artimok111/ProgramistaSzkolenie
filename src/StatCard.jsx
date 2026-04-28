function StatCard({ title, value, subtitle, variant = 'neutral' }) {
  return (
    <div className={`stat-card stat-card--${variant}`}>
      <div className="stat-card__title">{title}</div>
      <div className={`stat-card__value stat-card__value--${variant}`}>{value}</div>
      {subtitle && <div className="stat-card__subtitle">{subtitle}</div>}
    </div>
  );
}

export default StatCard;
