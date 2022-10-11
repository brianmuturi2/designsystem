import React, {createRef, KeyboardEventHandler, useEffect, useRef, useState} from 'react';
import Text from '../../atoms/Text'

const KEY_CODES = {
    ENTER: 13,
    SPACE: 32,
    DOWN_ARROW: 40,
    UP_ARROW: 38,
    ESC: 27
}

interface SelectOption {
    label: string;
    value: string;
}

interface RenderOptionProps {
    isSelected: boolean;
    option: SelectOption;
    getOptionRecommendedProps: (overrideProps?: Object) => Object
}

interface SelectProps {
    onOptionSelected?: (option: SelectOption, optionIndex: number) => void;
    label?: string;
    options?: SelectOption[];
    renderOption?: (props: RenderOptionProps) => React.ReactNode
}

const getNextOptionIndex = (currentIndex: number | null, options: SelectOption[]) => {
    if (currentIndex === null || currentIndex === options.length - 1) {
        return 0
    }

    return currentIndex + 1;
}

const getPreviousOptionIndex = (currentIndex: number | null, options: SelectOption[]) => {
    if (currentIndex === null) {
        return 0
    }

    if (currentIndex === 0) {
        return options.length - 1
    }

    return currentIndex - 1
}

const Select: React.FunctionComponent<SelectProps> = ({options = [], label = 'Please select an option ...', onOptionSelected: handler, renderOption}) => {

    const labelRef = useRef<HTMLButtonElement>(null);
    const [optionRefs, setOptionRefs] = useState<React.RefObject<HTMLLIElement>[]>([])
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [overlayTop, setOverlayTop] = useState<number>(0);
    const [selectedIndex, setSelectedIndex] = useState<number|null>(null)
    const [highlightedIndex, setHighlightedIndex] = useState<number|null>(null)

    useEffect(() => {
        setOverlayTop((
            labelRef.current?.offsetHeight || 0
        ) + 10)
    }, [labelRef.current?.offsetHeight]);

    useEffect(() => {
        setOptionRefs(options.map(_ => createRef<HTMLLIElement>()))
    }, [options.length]);

    useEffect(() => {
        if (highlightedIndex !== null && isOpen) {
            const ref = optionRefs[highlightedIndex];

            if (ref && ref.current) {
                ref.current.focus()
            }
        }
    }, [isOpen]);

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

    const highlightOption = (optionIndex: number | null) => {
        setHighlightedIndex(optionIndex);
    }

    const onButtonKeyDown: KeyboardEventHandler = (event) => {
        event.preventDefault();

        if ([KEY_CODES.ENTER, KEY_CODES.SPACE, KEY_CODES.DOWN_ARROW].includes(event.keyCode)) {
            setIsOpen(true);

            // set focus on the list item
            highlightOption(0)
        }

    }

    const onOptionKeyDown: KeyboardEventHandler = (event) => {
        if (event.keyCode === KEY_CODES.ESC) {
            setIsOpen(false);
            return;
        }

        if (event.keyCode === KEY_CODES.DOWN_ARROW) {
            highlightOption(getNextOptionIndex(highlightedIndex, options));
        }

        if (event.keyCode === KEY_CODES.UP_ARROW) {
            highlightOption(getPreviousOptionIndex(highlightedIndex, options));
        }

        if (event.keyCode === KEY_CODES.ENTER) {
            onOptionSelected(options[highlightedIndex!], highlightedIndex!)
        }
    }

    return (
        <div className={'dse-select'}>
            <button data-testid={'DseSelectButton'} onKeyDown={onButtonKeyDown} aria-controls={'dse-select-list'} aria-haspopup={true} aria-expanded={isOpen ? true : undefined} ref={labelRef} className={'dse-select__label'} onClick={onLabelClick}>
                <Text>
                    {selectedOption === null ? label : selectedOption.label}
                </Text>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 dse-select__caret ${isOpen ? 'dse-select__caret--open' : 'dse-select__caret--closed'}`} width={'1rem'} height={'1rem'}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>

            </button>

            {
                isOpen ? (
                    <ul role={'menu'} id={'dse-select-list'} style={{top: overlayTop}} className={'dse-select__overlay'}>
                        {options.map((option, optionIndex) => {
                            const isSelected = selectedIndex === optionIndex;
                            const isHighlighted = highlightedIndex === optionIndex;

                            const ref = optionRefs[optionIndex];

                            const renderOptionProps = {
                                option,
                                isSelected,
                                getOptionRecommendedProps: (overrideProps = {}) => ({
                                    className: `dse-select__option ${isSelected ? 'dse-select__option--selected' : ''} ${isHighlighted ? 'dse-select__option--highlighted' : ''}`,
                                    key: option.value,
                                    ref,
                                    role: 'menuitemradio',
                                    'aria-label': option.label,
                                    'aria-checked': isSelected ? true : undefined,
                                    onKeyDown: onOptionKeyDown,
                                    tabIndex: isHighlighted ? -1 : 0,
                                    onMouseEnter: () => highlightOption(optionIndex),
                                    onMouseLeave: () => highlightOption(null),
                                    onClick: () => onOptionSelected(option, optionIndex),
                                    ...overrideProps
                                })
                            };

                            if (renderOption) {
                                return renderOption(renderOptionProps)
                            }

                            return (
                                <li {...renderOptionProps.getOptionRecommendedProps()}>
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
