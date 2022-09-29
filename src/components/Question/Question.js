import React from 'react';
import './Question.css'
const Question = () => {
    return (
        <div>
            <p className='font-bold text-2xl text-left ml-20 mb-5'>Question & Answers :</p>
            <div className='bg-white shadow-md ml-20 p-4 box-body'>
                <p className='font-bold text-xl text-left'>How does react work?</p>
                <p className='text-left'>React read objects and uses them to generate HTML elements on the virtual DOM, after which it gets synchronized with the real DOM. So we'll have trees of things on the virtual DOM and trees of objects on the real DOM. When we modify the data on a React element, React immediately updates the corresponding DOM element.</p>
            </div>
            <div className='bg-white shadow-md ml-20 p-4 box-body'>
                <p className='font-bold text-xl text-left'>Differences between props & state</p>
                <p className='text-left'>The main distinction between state and props is that the former are external and controlled by whichever renders the component, whereas both are internal and controlled by the component itself.Props can be used with state and functional components.Whereas State can be used only with the state components class component</p>
            </div>
            <div className='bg-white shadow-md ml-20 p-4 box-body'>
                <p className='font-bold text-xl text-left'>How useEffect can be used along with dataload?</p>
                <p className='text-left'>By using useEffect Hook, React told what component needs to do something after render. After completing the DOM modifications, React will keep track of the function that was supplied and call it later. In this effect, we set the document title, but we could alternatively conduct data fetching or call any other imperative API.</p>
            </div>
            
        </div>
    );
};

export default Question;