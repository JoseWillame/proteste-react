import React from 'react';

import Comment from './Comment';

export default class Post extends React.Component {
    constructor(props) {   //criando uma inteface para o usuario criar novos comentarios.
        super(props);
        
        this.state ={     // fara o papel de estado do post, e todas as variavel ficará gravada dentro desse estado.

            comments: [ ],  //os comentarios serão guardados como objetos com uma unica propriedade chamada TEXT.
        
            newCommentText: '' //referênciar o INPUT na aplicação para saber o texto do novo comentário e guardará o texno novo.
        };
        
        this.handleSubmit = this.handleSubmit.bind(this);       
        this.handleTextChange = this.handleTextChange.bind(this); /*Referencia do escopo da Função utilizando BIND no CONSTRUCTO*/
    }
    

    handleSubmit(e) {   /* Criando o Método da classe que tambem recebe o mesmo parametro*/
        this.setState ({ //alterando o estado da aplicação toda vez que houver um INPUT.  
            comment:[ 
                this.state.comments,
                {text: this.state.newCommentText} //acessando a propriedade NEWCOMMENTTEXT.
            ]
        });

        this.state({newCommentText: ''}); //setando a variaval com o valor um vazio para limpar o input do comentario.

        e.preventDefault();//precisara acessar a variavel this.setState.
    }

    handleTextChange(e) {
        this.setState({newCommentText: e.target.value}) /*alterar o estado da aplicação toda vez que houver um INPUT*/
    
    }

    render() {

        return (
            <div>
                <h2>{ this.props.title }</h2>
                <form onSubmit={this.handleSubmit}> 
                    <input 
                        value={this.state.newCommentText} /*referencia a variável NEWCOMMENTTEXT*/ 
                        // Adcionar a variavel OnChange para disparar toda vez que houver alteração no INPUT 
                        onChange={this.handleTextChange} />
                    <button type="submit" >Comentar</button> 
                </form>
                {this.state.comments.map((comment, index) =>{  /*função MAP trás dois parâmetros COMMENT e INDEX(posição dele na rede de comentários)*/
                    return <Comment key= {index} text= {comment.text} />  /*propriedade KEY serve para o REACT se posionar mellhor quando esta 
                    interando sobre componentes*/                   
             
                }) }
            </div> 
                            
        );
    }
}