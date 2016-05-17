import React, {Component} from 'react';
import { reduxForm } from 'redux-form';
import Select from 'react-select';

class IndexView extends Component{
    onSubmit(props){
        console.log(props);
    }

    render(){
        const {fields: {link, typeDrive}, handleSubmit} = this.props;
        const options = [
            { value: 1, label: 'OneDrive' },
            { value: 2, label: 'GoogleDrive' },
            { value: 3, label: 'DropBox' }
        ];
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <div className="row flex-just-center">
                    <div className="cell size8">
                        <div className="input-control text full-size" data-role="input">
                            <input type="text" {...link}/>
                            <button type="submit" className="button"><span className="mif-upload mif-ani-bounce mif-ani-fast"></span></button>
                        </div>
                        <div className="input-control select">
                            <select {...typeDrive}>
                                {options.map(type => <option key={type.value} value={type.value}>{type.label}</option>)}
                            </select>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default reduxForm({
    form: 'LeechForm',
    fields: ['link', 'typeDrive']
}, null)(IndexView);//similar to connect method
