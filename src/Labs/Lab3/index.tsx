import { ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Add from './Add';
import AddingAndRemovingToFromArrays from './AddingAndRemovingToFromArrays';
import ArrayIndexAndLength from './ArrayIndexAndLength';
import ArrowFunctions from './ArrowFunctions';
import BooleanVariables from './BooleanVariables';
import Classes from './Classes';
import ConditionalOutputInline from './ConditionalOutputInline';
import ConditionalOutputIfElse from './ConditionalOutputIOfElse';
import DestructingImports from './DesctructinImports';
import Destructing from './Destructing';
import FilterFunction from './FilterFunction';
import FindIndex from './FindIndex';
import ForLoops from './ForLoops';
import FunctionDestructing from './FunctionDesctructing';
import Highlight from './Highlight';
import House from './House';
import IfElse from './IfElse';
import ImpliedReturn from './ImpliedReturn';
import JsonStringify from './JsonStringify';
import LegacyFunctions from './LegacyFunction';
import MapFunction from './MapFunction';
import PathParameters from './PathParameters';
import SimpleArrays from './SimlpeArrays';
import Spreading from './Spreading';
import Square from './Square';
import Styles from './Styles';
import TemplateLiterals from './TemplateLiterals';
import TernaryOperator from './TernaryOperator';
import TodoItem from './todos/TodoItem';
import TodoList from './todos/TodoList';
import VariablesAndConstants from './VariablesAndConstants';
import VariableTypes from './VariableTypes';

export default function Lab3() {
    console.log('Hello world!');
    const { todos } = useSelector((state: any) => state.todosReducer);
    return (
        <div>
            <h3>Lab 3</h3>
            <ListGroup>
                {todos.map((todo: any) => (
                    <ListGroup.Item key={todo.id}>{todo.title}</ListGroup.Item>
                ))}
            </ListGroup>
            <hr />
            <hr />
            <VariablesAndConstants />
            <VariableTypes />
            <BooleanVariables />
            <IfElse />
            <TernaryOperator />
            <ConditionalOutputIfElse />
            <ConditionalOutputInline />
            <LegacyFunctions />
            <ArrowFunctions />
            <ImpliedReturn />
            <TemplateLiterals />
            <SimpleArrays />
            <ArrayIndexAndLength />
            <AddingAndRemovingToFromArrays />
            <ForLoops />
            <MapFunction />
            <FindIndex />
            <FilterFunction />
            <JsonStringify />
            <House />
            <TodoItem />
            <TodoList />
            <Spreading />
            <Destructing />
            <FunctionDestructing />
            <DestructingImports />
            <Classes />
            <Styles />
            <Add a={3} b={4} />
            <Square>4</Square>
            <Highlight>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo
                minus cum, saepe totam vel nihil repellat nemo explicabo excepturi consectetur. Modi
                omnis minus sequi maiores, provident voluptates.
            </Highlight>
            <PathParameters />
        </div>
    );
}
