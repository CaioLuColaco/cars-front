import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useState } from "react";
import Link from 'next/link'
import carsApi from "./api/carsApi";

export default function Cars() {
    const [model, setModel] = useState("");
    const [marca, setMarca] = useState("");
    const [color, setColor] = useState("");
    const [yearFabrication, setYearFabrication] = useState("");
    const [yearModel, setYearModel] = useState("");

    const handleChangeModel =(e)=>{
        setModel(e.target.value);
    }
    const handleChangeMarca =(e)=>{
        setMarca(e.target.value);
    }
    const handleChangeColor =(e)=>{
        setColor(e.target.value);
    }
    const handleChangeYearFabrication =(e)=>{
        setYearFabrication(e.target.value);
    }
    const handleChangeYearModel =(e)=>{
        setYearModel(e.target.value);
    }

    const handleSubmit = async () => {
        await carsApi.post(`/car`, {
            model: model,
            marca: marca,
            color: color,
            yearFabrication: parseInt(yearFabrication),
            yearModel: parseInt(yearModel)
        })
        .then((response) => {
            alert("Carro Registrado!")
            setColor("")
            setMarca("")
            setModel("")
            setYearFabrication("")
            setYearModel("")
        })
        .catch((err) => {
            alert("Carro já registrado!")
        })
    }

  return (
    <div className={styles.container}>
      <Head>
        <title>Register</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://www.linkedin.com/in/caiolucenacolaco/">Car's Front!</a>
        </h1>

        <p className={styles.description}>
          <Link href='/'>
            <button className={styles.btn_window}>Home</button>
          </Link>

          <Link href='/cars'>
            <button className={styles.btn_window}>Cars</button>
          </Link>
        </p>

        <div className={styles.grid}>

          <div className={styles.card}>

            <h2>Registrar</h2>

            <label>
                <p>Modelo:</p>
                <input type="text" className={styles.card_input} name="model" value={model} onChange={(e) => handleChangeModel(e)}/>
            </label>

            <label>
                <p>Marca:</p>
                <input type="text" className={styles.card_input} name="marca" value={marca} onChange={(e) => handleChangeMarca(e)}/>
            </label>

            <label>
                <p>Cor:</p>
                <input type="text" className={styles.card_input} name="color" value={color} onChange={(e) => handleChangeColor(e)}/>
            </label>
            
            <label>
                <p>Fabricação:</p>
                <input type="number" className={styles.card_input} name="yearFabrication" min="0" step="1" value={yearFabrication} onChange={(e) => handleChangeYearFabrication(e)}/>
            </label>

            <label>
                <p>Ano do Modelo:</p>
                <input type="number" className={styles.card_input} name="yearModel" min="0" step="1" value={yearModel} onChange={(e) => handleChangeYearModel(e)}/>
            </label>

            <button onClick={() => handleSubmit()} className={styles.card_submit}> Enviar </button>

          </div>

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.linkedin.com/in/caiolucenacolaco/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            Caio Lucena Colaço
          </span>
        </a>
      </footer>
    </div>
  )
}
