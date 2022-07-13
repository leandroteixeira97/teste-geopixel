// React Hooks
import { useState, useEffect } from "react";

// Styles
import styles from "./ItemsSelector.module.css";

const ItemsSelector = () => {

  const [options, setOptions] = useState(["Geopixel"]);
  const [option, setOption] = useState("");
  const [selectedWord, setSelectedWord] = useState("Selecione uma opção");
  const [error, setError] = useState("");
  const [success, setSucess] = useState("");

  const addOption = () => {

    if (options.includes(option)) {
      setSucess("");
      setError("Não foi possível adicionar pois o item já consta na lista!");
    } else if (option === "") {
      setSucess("");
      setError("Por favor, digite algum item no campo para que seja possível adicionar!");
    } else {
      setOptions([...options, option].sort());
      setError("");
      setSucess("O item foi adicionado com sucesso!");
    }

    setOption("");

  };

  const removeOption = () => {

    if (option === "") {

      setSucess("");
      setError("Por favor, digite algum item no campo para remover!");

    } else if (options.indexOf(option) === -1) {

      setSucess("");
      setError("Não foi possível remover, o item não consta na lista!");

    } else {

      if (options.length === 1 && options.includes(option)) {

        setOption("");
        setSucess("");
        setError("Não é possível remover o único item da lista. Adicione mais um item para removê-lo!");

      } else {

        let optionToRemove = option;
        let newOptions = options.filter((option) => optionToRemove !== option);

        setOptions(newOptions);

        setOption("");
        setError("");
        setSucess("O item foi removido com sucesso!");

      }

    }


  };

  const clearInput = () => {

    if (option === "") {
      setError("");
      setSucess("A caixa de texto já está vazia!");
    } else {
      setOption("");
      setError("");
      setSucess("A caixa de texto foi limpa com sucesso!");
    }

  };

  useEffect(() => {
    handleSelectedWord();
  }, [options]);

  const handleSelectedWord = () => {

    let optionsList = document.getElementsByName("options")[0];
    let selectedOption = optionsList.options[optionsList.selectedIndex].text;

    setSelectedWord(selectedOption);
  };

  return (
    <div className={styles.items_selector}>
      <select name="options" className={styles.options} onChange={() => handleSelectedWord()} >
        <option value="" disabled selected>Selecione uma opção</option>
        {options.map((option) => {
          return <option key={option}>{option}</option>;
        })}
      </select>
      <input type="text" name="option-handler" placeholder="Insira um item aqui..." onChange={(e) => setOption(e.target.value)} value={option} />
      <div className={styles.handlers}>
        <button onClick={() => addOption()}>Adicionar</button>
        <button onClick={() => removeOption()}>Remover</button>
        <button onClick={() => clearInput()}>Limpar a caixa</button>
      </div>
      {selectedWord && <p>Palavra selecionada: {selectedWord}</p>}
      {error && <p className={styles.error_message}>{error}</p>}
      {success && <p className={styles.success_message}>{success}</p>}
    </div>
  );
};

export default ItemsSelector;