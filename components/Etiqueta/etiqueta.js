import styles from "./etiqueta.module.css"

const PRIORIDADES = { 
    alta : "Alta",
    media : "Media",
    baixa : "Baixa"

}

export default function Etiqueta({prioridade}) {

<span className={
`${styles.etiqueta} ${styles[prioridade]}`
}>[PRIORIDADES{prioridade}]</span>
}