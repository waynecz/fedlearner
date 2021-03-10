import React, { FC, useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import * as monaco from 'monaco-editor';

const Container = styled.div`
  width: 100%;
  min-height: 100%;
`;

const Editor: FC = () => {
  const editorRef = useRef<HTMLDivElement>(null);
  const [_editor, setEditor] = useState<monaco.editor.IStandaloneCodeEditor>();

  useEffect(() => {
    const model = monaco.editor.createModel('111', 'javascript');

    if (editorRef.current) {
      setEditor(monaco.editor.create(editorRef.current));
      if (_editor) _editor.setModel(model);
    }

    return () => {};
  }, []);

  return (
    <Container>
      <div ref={editorRef} />
    </Container>
  );
};

export default Editor;
