CCR
Class --> class App extends React.Componenet
class has state ingerits >methods setState CDM CDU

Constructor --> is the mehtod wich passes from parent down to child
constructor() {
    super();
    this.state = {} --> set the this.state to be the object type to be passed down to leave an object blank
}

Render --> render encompasses the return still use return jsx 

this.state sets the default data from the hook set state
the data in this.state 
 the property is  function

 this.state = { data } data is imported {}interpolate the data for state

pasisng data for return 
<Card {this.state.groceries} />
for passed props functions we write them in  the space between state and render

toggle = (id) => { // passing in the id from groceries makes the toggle alert to state change
this.setState() // setState is already a fnc dont use = assignment
this.setState({
    groceries: this.state.grogeriees.map(item => {
        if (item.id === id) -> looks at if the spec id is selected{
            return{
                name: item.name -->no change wanted leave as set item
                id: item.id -->no change wanted leave as set item
                purchased: item.purchased --> allows change in the boolean
            } else {
                return item, --> consitional to close if no change has occured 
            }
        }
    })// this is calling back to the constructor state allowing it to be changed by setState
})
}

pasisng data for return 
<Card {this.state.groceries} toggleItem={this.toggleItem} />
for passed props functions we write them in  the space between state and render


using sread in map return allows for all unchanged object properties to stay same while changing selected !order specific!
return {
    ... item
    purchased: item.purchased
}

sending from parent to child
<Thing toggle={this.toggle}/>

class without state 