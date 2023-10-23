const MostrarDatos = ({barrioSeleccionado}) => {
  const {heridos, muertos, solo_danos, atropello, caida_ocupante, choque, incendios, otros, CLUSTER_GE} = barrioSeleccionado 
  return (
    <div>
      <p>{heridos}</p>
      <p>{muertos}</p>
      <p>{solo_danos}</p>
      <p>{atropello}</p>
      <p>{caida_ocupante}</p>
      <p>{choque}</p>
      <p>{incendios}</p>
      <p>{otros}</p>
      <p>{CLUSTER_GE}</p>
    </div>
  )
}

export default MostrarDatos