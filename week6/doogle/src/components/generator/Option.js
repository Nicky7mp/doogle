import React from 'react'

export default function Option(props) {

    return (
        <div id="dropbox">
            <form>
                <label>Choose a breed:
                    <select class="DogSelection" id="selectDog" name="Dog" onChange={}>
                        <option></option>
                    </select>
                </label>
            </form>
        </div>
    )
}
