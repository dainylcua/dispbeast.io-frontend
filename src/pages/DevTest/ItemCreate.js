import { useState } from "react"

const ItemCreate = (props) => {

    const [ formState, setFormState ] = useState({
        name: "",
        itemType: "",
        rarity: "",
        effects: [],
        weight: 0
    })

    const [ effectChildren, setEffectChildren ] = useState(1)

    const handleChange = (evt) => {
        setFormState((prevState) => ({
            ...prevState,
            [evt.target.name]: evt.target.value
        }))
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        // pass in AJAX request function to post into Items
        setFormState({
            name: "",
            itemType: "",
            rarity: "",
            effects: "",
            weight: 0
        })
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label for="name">Item Name:</label>
                    <input type="text" name="name" value={formState.name} onChange={handleChange} />
                </div>
                <div>
                    <label for="itemType">Item Type:</label>
                    <select name="itemType" value={formState.itemType} onChange={handleChange}>
                        <option value="weapon">Weapon</option>
                        <option value="armor">Armor</option>
                        <option value="misc">Misc</option>
                    </select>
                </div>
                <div>
                    <label for="rarity">Rarity</label>
                    <select name="rarity" value={formState.rarity} onChange={handleChange}>
                        <option value="common">Common</option>
                        <option value="uncommon">Uncommon</option>
                        <option value="rare">Rare</option>
                        <option value="veryRare">Very Rare</option>
                        <option value="legendary">Legendary</option>
                        <option value="artifact">Artifact</option>
                    </select>
                </div>
                <div>
                    <label for="effects">Effects</label>
                    <textarea name="effects"cols="20" rows="10" value={formState.effects} onChange={handleChange}></textarea>
                </div>
                <div>
                    <label for="weight"></label>
                    <input type="number" name="weight" value={formState.weight} onChange={handleChange} />
                </div>
                <div>
                    <input type="submit" value="Add Item" />
                </div>
            </form>
        </div>
    )
}

export default ItemCreate