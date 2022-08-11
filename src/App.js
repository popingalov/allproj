import React, { Component } from 'react';
import shortid from 'shortid';
//Компоненти
import PaintingList from './components/Painting';
import Section from './components/Section';
import paintings from './paintings.json';
import ColorPicker from './components/ColorPicker';
import Alert from './components/Alert';
import Container from './components/Container';
import Counter from './components/Counter';
import DropDown from './components/DropDown';
import Todo from './components/Todo';
import Form from './components/Form';
import TodoEditor from './components/TodoEditor/TodoEditor';
import Filter from './components/Filter';
import FeedBack from './components/FeedBack';
import Statistic from './components/Statistic';
import PhoneBook from './components/PhoneBook';
import PhoneList from './components/PhoneList';
import Modal from './components/Modal';

//
const colorPickerOption = [
  { lable: 'red', color: '#F44336' },
  { lable: 'green', color: '#4CAF50' },
  { lable: 'blue', color: '#2196F3' },
  { lable: 'grey', color: '#607D8B' },
  { lable: 'pink', color: '#E91E63' },
  { lable: 'indigo', color: '#3F5185' },
];
class App extends Component {
  state = {
    filter: '',
    filterTodo: [],
    dopStat: { total: 0, positive: 0 },
    statistic: { good: 0, bad: 0, natural: 0 },
    todos: [
      { id: 'id-1', text: 'Зроблю', completed: false },
      { id: 'id-2', text: 'Ну маааа', completed: false },
      { id: 'id-3', text: 'Вчись', completed: false },
      { id: 'id-4', text: 'Не хочу', completed: false },
    ],
    contacts: [],
    filterContacts: [],
    contactsFilter: '',
    showModal: false,
  };
  componentDidMount() {
    const localStoreContacts = JSON.parse(localStorage.getItem('contacts'));
    this.setState({
      contacts: localStoreContacts || [],
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  filterTodo = word => {
    const { todos } = this.state;
    const sss = todos.filter(todo =>
      todo.text.toLowerCase().includes(word.toLowerCase()),
    );
    console.log(this.state);
    this.setState({
      filterTodo: sss,
    });
  };

  filterBook = word => {
    const { contacts } = this.state;
    const sss = contacts.filter(todo =>
      todo.name.toLowerCase().includes(word.toLowerCase()),
    );
    console.log(sss);
    this.setState({
      filterContacts: sss,
    });
  };

  filterChange = text => {
    this.setState({ filter: text });
    this.filterBook(text);
  };

  filterChangeBook = text => {
    this.setState({ contactsFilter: text });
    this.filterTodo(text);
  };

  handlerFeedBack = e => {
    this.setState(prev => {
      const mut = (prev.statistic[e] += 1);
      let positive;
      const values = Object.values(prev.statistic);
      const total = values.reduce((mass, elem, idx) => {
        if (idx === values.length - 1) {
          positive = 100 - (prev.statistic.bad / (mass += elem)) * 100;
        }
        return (mass += elem);
      }, 0);
      return {
        statistic: { ...prev.statistic, [e]: mut },
        dopStat: { total, positive },
      };
    });
  };

  deleteTodo = id => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => id !== todo.id),
    }));
  };
  todoTogle = id => {
    this.setState(prev => ({
      todos: prev.todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  };
  formSubmit = data => {
    this.setState({ ...data });
  };
  todoSub = text => {
    this.setState(prev => ({
      todos: [...prev.todos, { id: shortid(), text, completed: false }],
    }));
  };

  submitPhone = e => {
    this.setState(prev => ({ contacts: [...prev.contacts, { ...e }] }));
  };

  togleModal = () => {
    this.setState(prev => ({ showModal: !prev.showModal }));
  };
  render() {
    const {
      todos,
      filterTodo,
      filter,
      statistic,
      dopStat,
      contacts,
      contactsFilter,
      filterContacts,
      showModal,
    } = this.state;
    const {
      formSubmit,
      filterChange,
      handlerFeedBack,
      submitPhone,
      filterChangeBook,
      togleModal,
    } = this;
    return (
      <Container>
        <button type="button" onClick={togleModal}>
          x
        </button>

        {showModal && (
          <Modal togleModal={togleModal} styleName="testColor">
            <button type="button" onClick={togleModal}>
              X me{' '}
            </button>
          </Modal>
        )}
        <Filter filter={filter} filterChange={filterChange} />
        <PhoneBook submitPhone={submitPhone} contactsFilter={contactsFilter} />
        <PhoneList
          filterContacts={
            filterContacts.length !== 0 || filter ? filterContacts : contacts
          }
        />
        <FeedBack
          statisticOpt={Object.keys(statistic)}
          handlerFeedBack={handlerFeedBack}
        />
        <Statistic statistic={statistic} dopStat={dopStat} />
        <Filter filter={contactsFilter} filterChange={filterChangeBook} />
        <Todo
          todos={filterTodo.length !== 0 ? filterTodo : todos}
          deleteTodo={this.deleteTodo}
          togle={this.todoTogle}
        />
        <TodoEditor todoSub={this.todoSub} />
        <Form formSubmit={formSubmit} />
        <DropDown />
        <Counter initValue={1} />
        <Alert text="Шеф все пропало" type="success" />
        <Alert text="Шеф все пропало" type="warning" />
        <Alert text="Шеф все пропало" type="error" />
        <ColorPicker optionColor={colorPickerOption} />
        <Section title="Топ недели">
          <PaintingList items={paintings} />
        </Section>
        <Section title="Лучшее"></Section>
      </Container>
    );
  }
}
export default App;
