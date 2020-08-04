import React from 'react'

import './styles.css'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

function TeacherItem () {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://media-exp1.licdn.com/dms/image/C4D03AQHGVNgEVDiGHA/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=82A5YK-VDjjHJqiR8NMeJAftGit4a3DoV5VTfV-m2jE" alt="Quirinão"/>
                <div>
                    <strong>Quirinão Matheusim</strong>
                    <span>Português</span>
                </div>
            </header>
            

            <p>
                Vocacionado a dar aulas e apaixonado por português
                <br/><br/>
                Mussum Ipsum, cacilds vidis litro abertis. Per aumento de cachacis, eu reclamis. Interagi no mé, cursus quis, vehicula ac nisi. Suco de cevadiss deixa as pessoas mais interessantis. Atirei o pau no gatis, per gatis num morreus.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 16,00</strong>
                </p>    
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>  
        </article>
    )
}

export default TeacherItem