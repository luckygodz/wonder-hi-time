const StarField = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-foreground animate-twinkle"
          style={{
            width: Math.random() * 3 + 1 + 'px',
            height: Math.random() * 3 + 1 + 'px',
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%',
            animationDelay: Math.random() * 3 + 's',
            opacity: Math.random() * 0.5 + 0.3,
          }}
        />
      ))}
    </div>
  );
};

export default StarField;
