import React from "react";
import MonacoEditor from 'react-monaco-editor';

const Monaco = props => {
    const {
        width,
        height,
        language,
        value,
        options,
        onChange,
        editorDidMount
    } = props;

    return (
        <MonacoEditor
            width={width}
            height={height}
            language={language}
            value={value}
            options={options}
            onChange={onChange}
            editorDidMount={editorDidMount}
            theme="vs-dark"
        />
    )
}

export default Monaco;