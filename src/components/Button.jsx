
const mapStyle = new Map([
    ['default',"bg-primary text-base font-bold w-327 rounded-sm h-48"],
    ['social',"h-40 border rounded-sm w-327"], 
])


function Button({ children, onClick, type = "button" ,style ="default" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={mapStyle.get(style)}
    >
      {children}
    </button>
  );
}

export default Button;








// /* .PillFixed */

// box-sizing: border-box;

// /* Auto layout */
// display: flex;
// flex-direction: column;
// align-items: center;
// padding: 10px 24px;

// position: absolute;
// height: 40px;
// left: 0px;
// right: 0px;
// top: 0px;

// /* UI/Gray 80 */
// border: 1px solid #3A3A3A;
// border-radius: 100px;


// /* Content */

// /* Auto layout */
// display: flex;
// flex-direction: row;
// align-items: center;
// padding: 0px;
// gap: 8px;

// width: 145px;
// height: 20px;


// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;


// /* Outline 16px / heart */

// display: none;
// width: 16px;
// height: 16px;


// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;


// /* Checkbox Label */

// width: 145px;
// height: 20px;

// font-family: 'Lato';
// font-style: normal;
// font-weight: 600;
// font-size: 16px;
// line-height: 20px;
// /* identical to box height, or 125% */
// text-align: center;

// /* Text/Gray 80 */
// color: #3A3A3A;


// /* Inside auto layout */
// flex: none;
// order: 1;
// flex-grow: 0;


// /* Outline 16px / chevron-right */

// display: none;
// width: 16px;
// height: 16px;


// /* Inside auto layout */
// flex: none;
// order: 2;
// flex-grow: 0;


// /* Logo */

// position: absolute;
// width: 15.72px;
// height: 17px;
// left: 24px;
// top: 11px;

// background: url(.png);
