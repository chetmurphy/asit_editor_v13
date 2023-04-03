import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import * as yamlMode from '@codemirror/legacy-modes/mode/yaml';
import * as streamParser from '@codemirror/stream-parser';
import * as LanguageSupport from '@codemirror/language';

const yaml = new LanguageSupport(streamParser.StreamLanguage.define(yamlMode.yaml));

function App() {
    const onChange = React.useCallback((value, viewUpdate) => {
        console.log('value:', value);
    }, []);
    return (
        <CodeMirror
            value="doc: !asit');"
            height="200px"
            extensions={[yaml({})]}
            onChange={onChange}
        />
    );
}
export default App;
