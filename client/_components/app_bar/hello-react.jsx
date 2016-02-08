import React from 'react';
import { Meteor } from 'meteor/meteor';
import { styles } from './hello.mss';

export class App extends React.Component {
    render() {
        return (
            <div>
                <h1>React Example!</h1>
                <button className={styles.hello}>Click Me</button>
                <div className={styles['oh-hi-there']}>
                    <button>Click Me</button>
                </div>
                <h3>{importedText()}</h3>
            </div>
        )
    }
}