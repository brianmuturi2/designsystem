import React, {useEffect, useRef, useState} from 'react';

interface SelectOption {
    label: string;
    value: string;
}

interface SelectProps {
    onOptionSelected?: (option: SelectOption, optionIndex: number) => void;
    label?: string;
    options?: SelectOption[];
}

const Select: React.FunctionComponent<SelectProps> = ({options = [], label = 'Please select an option ...', onOptionSelected: handler}) => {

    const labelRef = useRef<HTMLButtonElement>(null);

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [overlayTop, setOverlayTop] = useState<number>(0);

    useEffect(() => {
        setOverlayTop((
            labelRef.current?.offsetHeight || 0
        ) + 10)
    }, [labelRef.current?.offsetHeight]);

    const onOptionSelected = (option: SelectOption, optionIndex: number) => {

        setIsOpen(!isOpen);

        if (handler) {
            handler(option, optionIndex)
        }
    }

    const onLabelClick = () => {
        setIsOpen(!isOpen)
    }


    return (
        <div className={'dse-select'}>
            <button ref={labelRef} className={'dse-select__label'} onClick={onLabelClick}>
                <span>{label}</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" width={'1rem'} height={'1rem'}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>

            </button>

            {
                isOpen ? (
                    <ul style={{top: overlayTop}} className={'dse-select__overlay'}>
                        {options.map((option, optionIndex) => (
                            <li
                                className={'dse-select__option'}
                                key={option.value }
                                onClick={() => onOptionSelected(option, optionIndex)}>
                                {option.label}
                            </li>
                        ))}
                    </ul>
                ) : null
            }
        </div>
    );
}

export default Select;
