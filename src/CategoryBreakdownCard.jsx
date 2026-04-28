function formatCurrency(amount) {
  return new Intl.NumberFormat('pl-PL', {
    style: 'currency',
    currency: 'PLN',
  }).format(amount);
}

function CategoryBreakdownCard({ breakdown }) {
  const active = breakdown.filter((c) => c.transactionCount > 0);

  if (active.length === 0) {
    return (
      <div className="card">
        <h3 className="card__title">Podział na kategorie</h3>
        <p className="no-data">Brak transakcji w tym miesiącu.</p>
      </div>
    );
  }

  return (
    <div className="card">
      <h3 className="card__title">Podział na kategorie</h3>
      <div className="category-list">
        {active.map((cat) => (
          <div key={cat.categoryId} className="category-item">
            <div
              className="category-icon"
              style={{ backgroundColor: cat.categoryColor + '20' }}
            >
              {cat.categoryIcon}
            </div>
            <div className="category-info">
              <div className="category-name">{cat.categoryName}</div>
              <div className="category-stats">
                {cat.income > 0 && (
                  <span>Przychód: {formatCurrency(cat.income)}</span>
                )}
                {cat.expenses > 0 && (
                  <span>Wydatki: {formatCurrency(cat.expenses)}</span>
                )}
                <span>• {cat.transactionCount} transakcji</span>
              </div>
            </div>
            <div className={`category-amount ${cat.net >= 0 ? 'income' : 'expense'}`}>
              {formatCurrency(cat.net)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryBreakdownCard;
