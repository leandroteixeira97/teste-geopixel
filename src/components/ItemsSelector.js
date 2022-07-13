// React Hooks
import { useState, useEffect } from "react";

// Styles
import styles from "./ItemsSelector.module.css";

const ItemsSelector = () => {

  // Definição dos states inicias que utilizarei na aplicação, conforme orientações do teste
  const [options, setOptions] = useState(["Geopixel"]);
  const [option, setOption] = useState("");
  const [selectedWord, setSelectedWord] = useState("Selecione uma opção");
  const [error, setError] = useState("");
  const [success, setSucess] = useState("");

  // Função para adicionar os itens à lista
  const addOption = () => {

    // Validação inicial ao adicionar um item à lista, conforme regras estabelecidas no teste
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

    // Limpeza do valor do input
    setOption("");

  };

  // Função para remover itens da lista
  const removeOption = () => {

    // Validações para que o input não esteja vazio ao remover e tamvém para verificar se o item consta na lista
    if (option === "") {

      setSucess("");
      setError("Por favor, digite algum item no campo para remover!");

    } else if (options.indexOf(option) === -1) {

      setSucess("");
      setError("Não foi possível remover, o item não consta na lista!");

    } else {

      // Validação para evitar que a pessoa tente remover o único item remanescente da lista
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

  // Função de limpeza do input através do botão
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

  // Hook que verifica se houveram alterações na lista e renderiza o item que está selecionado no select
  useEffect(() => {
    handleSelectedWord();
  }, [options]);

  // Função que renderiza o item selecionado no select
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