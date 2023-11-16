import React from "react";
import "./layout.scss";
import { TSection } from "./types";

/**
 * @param type dark | light (optional)
 */
const Section: React.FC<TSection> = ({ children, type, animation, ...rest }) => {
    return (
        <section className={`section ${type}`} {...rest}>
            {children}
            {animation && (
                <div className="bgAnimation">
                    {[1, 2, 3, 4, 5].map((e: any) => (
                        <div key={e} />
                    ))}
                </div>
            )}
        </section>
    );
};

export default Section;
