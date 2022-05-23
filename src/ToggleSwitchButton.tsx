import React from 'react'

interface functionArgs {
    className: string,
    handleChange: React.ChangeEventHandler<HTMLInputElement>
}

const ToggleSwitchButton = ({ className, handleChange }: functionArgs) => {
        return (
            <div className={className}>
                <input type="checkbox" id="btn-mode" onChange={handleChange}/>
                <label htmlFor="btn-mode"></label>
            </div>
        )
    }

export default ToggleSwitchButton
