import React, {useEffect, useRef, useState} from 'react';
import Text from '../../atoms/Text'

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
    const [selectedIndex, setSelectedIndex] = useState<number|null>(null)

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

        setSelectedIndex(optionIndex);
        setIsOpen(false);
    }

    const onLabelClick = () => {
        setIsOpen(!isOpen)
    }

    let selectedOption = null;

    if (selectedIndex !== null) {
        selectedOption = options[selectedIndex];
    }

    return (
        <div className={'dse-select'}>
            <button ref={labelRef} className={'dse-select__label'} onClick={onLabelClick}>
                <Text>
                    {selectedOption === null ? label : selectedOption.label}
                </Text>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" width={'1rem'} height={'1rem'}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>

            </button>

            {
                isOpen ? (
                    <ul style={{top: overlayTop}} className={'dse-select__overlay'}>
                        {options.map((option, optionIndex) => {
                            const isSelected = selectedIndex === optionIndex
                            return (
                                <li
                                    className={`dse-select__option ${isSelected ? 'dse-select__option--selected' : ''}`}
                                    key={option.value }
                                    onClick={() => onOptionSelected(option, optionIndex)}>
                                    <Text>{option.label}</Text>

                                    {
                                        isSelected &&
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" width={'1rem'} height={'1rem'}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                    }

                                </li>
                        )})}
                    </ul>
                ) : null
            }
        </div>
    );
}

export default Select;
