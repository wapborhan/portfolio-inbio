import React from "react";

interface AccordionProps {
  selectedIndex?: number;
  onChange?: (index: number, expanded: boolean, selectedIndex: number) => void;
  changeOnClick?: boolean;
  transitionDuration?: number;
  transitionTimingFunction?: string;
  openClassName?: string;
  className?: string;
  id?: string;
  children?: React.ReactNode;
}

interface AccordionState {
  index: number;
}

class Accordion extends React.Component<AccordionProps, AccordionState> {
  static defaultProps = {
    transitionDuration: 500,
    transitionTimingFunction: "ease",
    openClassName: "open",
    changeOnClick: true,
  };

  timeout: any;
  nodes: { ref: HTMLDivElement | null }[] = [];

  constructor(props: AccordionProps) {
    super(props);
    this.state = {
      index:
        typeof props.selectedIndex !== "undefined" ? props.selectedIndex : -1,
    };
  }

  componentDidUpdate(prevProps: AccordionProps) {
    if (
      typeof this.props.selectedIndex !== "undefined" &&
      this.props.selectedIndex !== prevProps.selectedIndex &&
      this.state.index !== this.props.selectedIndex
    ) {
      this.toggle(this.props.selectedIndex);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  toggle(index: number, click?: boolean) {
    clearTimeout(this.timeout);

    if (click) {
      if (this.props.onChange)
        this.props.onChange(
          index,
          this.state.index !== index,
          this.state.index !== index ? index : -1
        );
      if (!this.props.changeOnClick) return;
    }

    if (this.state.index > -1 && this.nodes[this.state.index]?.ref) {
      const content = this.nodes[this.state.index].ref?.children[1] as HTMLElement;
      if (content && content.children[0]) {
        content.style.height = `${(content.children[0] as HTMLElement).offsetHeight}px`;
      }
    }

    if (this.state.index === index || index === -1) {
      setTimeout(() => {
        this.setState({ index: -1 });
      }, 50);
    } else {
      setTimeout(() => {
        this.setState({ index });
        this.timeout = setTimeout(() => {
          if (this.nodes[index]?.ref) {
            const content = this.nodes[index].ref?.children[1] as HTMLElement;
            if (content) content.style.height = "auto";
          }
        }, this.props.transitionDuration);
      }, 50);
    }
  }

  getHeight(index: number): string | number {
    if (index === this.state.index) {
      if (this.nodes.length > index && this.nodes[index]?.ref) {
        const content = this.nodes[index].ref?.children[1] as HTMLElement;
        return content?.children[0]
          ? (content.children[0] as HTMLElement).offsetHeight
          : "auto";
      }
      return "auto";
    }
    return 0;
  }

  render() {
    const style: React.CSSProperties = {
      overflow: "hidden",
      transition: `height ${this.props.transitionDuration}ms ${this.props.transitionTimingFunction}`,
    };
    const nodes = React.Children.map(this.props.children, (child, index) => {
      if (!React.isValidElement(child)) return null;
      return (
        <div
          key={index}
          ref={(div) => {
            this.nodes[index] = { ref: div };
          }}
          className={this.state.index === index ? this.props.openClassName : ""}
        >
          <div onClick={() => this.toggle(index, true)}>
            {(child.props as any)["data-header"]}
          </div>
          <div style={{ ...style, height: this.getHeight(index) }}>{child}</div>
        </div>
      );
    });
    return <div className={this.props.className}>{nodes}</div>;
  }
}

export default Accordion;
