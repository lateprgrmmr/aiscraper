
interface TextFieldProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
}

const TextField = (props: TextFieldProps) => {
    const { label, value, onChange } = props;
    return (
        <div
            style={{
                padding: 10,
                margin: 10,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div>
                <label style={{ padding: 10 }}>
                    {label}&nbsp;
                </label>

                <input
                    style={{
                        width: "100%",
                    }}
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                />
            </div>
        </div>
    );
};

export default TextField;