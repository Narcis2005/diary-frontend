const formatTabInTextarea = (e: React.KeyboardEvent<HTMLTextAreaElement>): React.ChangeEvent<HTMLTextAreaElement> => {
    const target = e.target as HTMLTextAreaElement;
    const content = target.value;
    const caret = target.selectionStart;
    const newText = content.substring(0, caret) + "\t" + content.substring(caret);
    const newE = e as unknown as React.ChangeEvent<HTMLTextAreaElement>;
    newE.target.value = newText;
    return newE;
};

export default formatTabInTextarea;
