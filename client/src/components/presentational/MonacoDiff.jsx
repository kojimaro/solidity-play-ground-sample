import React from "react";
import { MonacoDiffEditor } from 'react-monaco-editor';

const MonacoDiff = props => {
    const {
        width,
        height,
        language,
        original,
        modified,
        options,
        handleChange,
        editorDidMount
    } = props;

    return (
        <MonacoDiffEditor
            width={width}
            height={height}
            language={language}
            original={original}
            value={modified}
            options={options}
            onChange={handleChange}
            editorDidMount={editorDidMount}
        />
    )
}

export default MonacoDiff;