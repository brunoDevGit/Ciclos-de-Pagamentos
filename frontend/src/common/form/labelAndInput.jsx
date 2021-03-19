import React from 'react'
import Grid from '../layout/grid'

export default props => (
    <Grid>
        <div className="form-group">
            <label htmlFor={props.nme}>{props.label}</label>
            <input {...props.input} 
                className='form-control'
                placeholder={props.placeholder} 
                readOnly={props.readOnly}
                type={props.type}
            />
        </div>
    </Grid>
)