import React from 'react';


class CartItem extends React.Component{

    constructor(){
        super();
        this.state = {
            price : 999,
            title : 'Phone',
            qty : 1,
            img : '',
        }
    }

    increaseQuantity = () =>{
        // console.log(this.state);

        // setState form1 
        // this.setState({
        //     qty : this.state.qty + 1
        // });
     

        // setState form 2 
        // if prevState required use this 
        // both takes place by shallow merging 
        // calling this.setState will re-render our page 
        this.setState( (prevState) => {
            return {
                qty : prevState.qty + 1,
            }
        });
    }

    decreaseQuantity = () => {
        const {qty} = this.state;
        if(qty == 0) return;
        // console.log(qty,price);
        this.setState( (prevState) => {
            
            return {
                qty : prevState.qty - 1,
            }
            
        });

    }

    render(){
        const { price, title, qty} = this.state;
        console.log('render');
        return(
            <div className='cart-item'>

                <div className='left-block'>
                    <img style={styles.image}/>
                </div>
                <div className='right-block'>
                    <div style={ { fontSize : 25}}>{title}</div>
                    <div style={ {color : '#777'}}>{price}</div>
                    <div style={ {color : '#777'}}>{qty}</div>
                    <div className='cart-item-actions'>

                        <img alt='decrease'
                             className='action-icons'
                             src='https://cdn-icons-png.flaticon.com/512/992/992683.png'
                             onClick={this.decreaseQuantity}
                        />
                        <img alt='increase' 
                             className='action-icons' 
                             src='https://cdn-icons-png.flaticon.com/512/992/992651.png'
                             onClick={this.increaseQuantity}
                        />
                        <img alt='delete' 
                             className='action-icons'
                             src='https://cdn-icons-png.flaticon.com/512/3096/3096673.png'/>
                    </div>
                </div>
                	
            </div>
        );
    }
}

const styles = {
    image : {
        height: 110,
        width : 110,
        borderRadius : 4,
        background : '#ccc',
    }
}


export default CartItem;