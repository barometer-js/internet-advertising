export function Title({ name, color }) {
  return (
    <h2
      style={{
        color: color,
        fontSize: '50px',
        lineHeight: '1',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontWeight: '500',
        marginBottom: '45px',
      }}
    >
      {name}
    </h2>
  );
}
