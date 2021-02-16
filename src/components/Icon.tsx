import React from "react";
import styled from "styled-components";

type IconProps = {
  name: keyof Icons;
  size?: number;
};

export const Icon: React.FC<IconProps> = (props) => {
  return <IconContainer {...props}>{icons[props.name]}</IconContainer>;
};

const IconContainer = styled.span<{ size?: number }>`
  svg {
    width: ${({ size }) => size && size + "px"};
    height: ${({ size }) => size && size + "px"};
  }
`;

export const iconForBg = (name: keyof StringIcons): string => {
  return `url('data:image/svg+xml;utf8,${stringIcons[name]}')`;
};

export const stringIcons: StringIcons = {
  chevron_bottom:
    '<svg  fill="gray" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19.2929 7.29285L20.7071 8.70706L12 17.4142L3.29291 8.70706L4.70712 7.29285L12 14.5857L19.2929 7.29285Z" fill-rule="evenodd" clip-rule="evenodd"/></svg>',
};

type StringIcons = {
  chevron_bottom: string;
};

type Icons = {
  multiple: React.ReactElement;
  calendar: React.ReactElement;
  biceps: React.ReactElement;
  bar: React.ReactElement;
  dumbbell: React.ReactElement;
  user: React.ReactElement;
  plus: React.ReactElement;
  dots: React.ReactElement;
  check: React.ReactElement;
};

const icons: Icons = {
  check: (
    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.6508 3.24076C14.0702 3.60018 14.1187 4.23148 13.7593 4.65081L7.75929 11.6508C7.56517 11.8773 7.28009 12.0053 6.98185 11.9999C6.68361 11.9944 6.40337 11.8562 6.21761 11.6228L3.21761 7.85353C2.87368 7.42141 2.94517 6.7923 3.37729 6.44836C3.80941 6.10443 4.43853 6.17592 4.78246 6.60804L7.0286 9.43011L12.2408 3.34923C12.6002 2.9299 13.2315 2.88134 13.6508 3.24076Z" />
    </svg>
  ),
  multiple: (
    <svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.46443 1.05028C2.07391 0.659754 1.44074 0.659754 1.05022 1.05028C0.659693 1.4408 0.659693 2.07397 1.05022 2.46449L4.58579 6.00006L1.05029 9.53556C0.659763 9.92608 0.659763 10.5592 1.05029 10.9498C1.44081 11.3403 2.07398 11.3403 2.4645 10.9498L6 7.41427L9.5355 10.9498C9.92602 11.3403 10.5592 11.3403 10.9497 10.9498C11.3402 10.5592 11.3402 9.92608 10.9497 9.53556L7.41421 6.00006L10.9498 2.46449C11.3403 2.07397 11.3403 1.4408 10.9498 1.05028C10.5593 0.659754 9.92609 0.659754 9.53557 1.05028L6 4.58585L2.46443 1.05028Z" />
    </svg>
  ),
  calendar: (
    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.35749 0.456071C5.80416 0.714988 6.0778 1.19335 6.07452 1.70955H6.07473V3.67229H3.19638V1.70955C3.19331 1.19335 3.46695 0.714988 3.91341 0.456071C4.36007 0.19695 4.91104 0.19695 5.35749 0.456071ZM16.0865 0.456071C16.533 0.714988 16.8066 1.19335 16.8036 1.70955V3.67229H13.9254V1.70955C13.9221 1.19335 14.1958 0.714988 14.6424 0.456071C15.0889 0.19695 15.6399 0.19695 16.0865 0.456071ZM18.4293 3.22378H17.8507V4.19584C17.8507 4.48503 17.6164 4.71941 17.3272 4.71941H13.4017C13.1125 4.71941 12.8781 4.48503 12.8781 4.19584V3.22378H7.12165V4.19584C7.12165 4.48503 6.88727 4.71941 6.59809 4.71941H2.67282C2.38363 4.71941 2.14926 4.48503 2.14926 4.19584V3.22378H1.57068C0.703534 3.2248 0.00102258 3.92752 0 4.79446V7.39222H20V4.79446C19.999 3.92752 19.2965 3.2248 18.4293 3.22378ZM1.57068 19.7468C0.703534 19.746 0.00102258 19.0433 0 18.1761V8.43934H20V18.1761C19.999 19.0433 19.2965 19.746 18.4293 19.7468H1.57068Z" />
    </svg>
  ),
  biceps: (
    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.229 7.50166L17.0834 7.50002C15.0554 7.50002 13.2183 8.62305 12.2873 10.3967C11.7063 10.1367 11.0719 9.99998 10.4168 9.99998C9.75842 9.99998 9.12566 10.1468 8.54688 10.4082C8.39184 10.4782 8.30052 10.6427 8.31341 10.8124C8.32434 10.9566 8.33356 11.1013 8.33356 11.25C8.33356 11.929 8.19685 12.5516 7.92747 13.1001C7.85505 13.2478 7.70693 13.3333 7.55314 13.3333C7.4917 13.3333 7.42905 13.3195 7.37002 13.2905C7.16331 13.1892 7.07827 12.9394 7.1796 12.7331C7.39241 12.2994 7.50022 11.8005 7.50022 11.25C7.50022 10.9445 7.43522 10.1358 7.42416 10.0357C7.38471 9.67866 7.33588 9.32995 7.28901 9.00429C7.28889 9.00347 7.28928 9.00273 7.28917 9.00191C7.21155 8.46141 7.136 7.93646 7.13112 7.49959L9.23784 7.49998C9.56952 7.50006 9.88764 7.36831 10.1222 7.13378L11.7888 5.46713C12.2653 4.99065 12.2759 4.22204 11.8206 3.73255C12.038 3.40209 12.0915 2.97897 11.9367 2.58144C11.8394 2.33164 11.6505 2.12735 11.4275 1.97868L10.457 1.33189C10.0101 1.03397 9.4905 0.851744 8.95359 0.835612C7.67506 0.797136 6.46719 1.27724 5.56701 2.17742C3.97078 3.77368 2.71471 5.60146 1.83257 7.6103C0.769779 10.0305 0.231038 11.816 0.231038 12.9166C0.231038 13.5473 0.176508 14.0596 0.0686969 14.4396C-0.161612 15.2514 0.200921 16.1173 0.95005 16.5453C3.9509 18.2599 7.36393 19.1665 10.8201 19.1665H11.4227C13.5695 19.1665 15.7022 18.819 17.738 18.1376L18.0058 18.048C19.197 17.6492 20 16.5337 20 15.2775V10.4203C20 8.85133 18.7569 7.54194 17.229 7.50166Z" />
    </svg>
  ),
  bar: (
    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.8281 18.2031H19.4141C19.7379 18.2031 20 18.4652 20 18.7891C20 19.1129 19.7379 19.375 19.4141 19.375H15.2734V1.21094C15.2734 0.887344 15.5358 0.625 15.8594 0.625H18.2422C18.5658 0.625 18.8281 0.887344 18.8281 1.21094V18.2031ZM13.5156 4.14062H11.1719C10.8483 4.14062 10.5859 4.40289 10.5859 4.72656V19.375H14.1016V4.72656C14.1016 4.40289 13.8392 4.14062 13.5156 4.14062ZM6.48438 7.65625H8.82812C9.15172 7.65625 9.41406 7.91852 9.41406 8.24219V19.375H5.89844V8.24219C5.89844 7.91852 6.16078 7.65625 6.48438 7.65625ZM4.72656 19.375H0.585938C0.26207 19.375 0 19.1129 0 18.7891C0 18.4652 0.26207 18.2031 0.585938 18.2031H1.17188V11.7578C1.17188 11.4341 1.43422 11.1719 1.75781 11.1719H4.14062C4.46422 11.1719 4.72656 11.4341 4.72656 11.7578V19.375Z" />
    </svg>
  ),
  dumbbell: (
    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.11155 3.4743H4.49862C5.40932 3.4743 6.15026 4.21523 6.1503 5.12598V14.5475C6.1503 15.4582 5.40936 16.1991 4.49862 16.1991H4.11155C3.20085 16.1991 2.45987 15.4582 2.45987 14.5475V5.12598C2.45987 4.21527 3.20081 3.4743 4.11155 3.4743ZM15.8885 3.80082H15.5015C14.5907 3.80082 13.8497 4.54179 13.8497 5.4525V14.874C13.8497 15.7848 14.5907 16.5257 15.5015 16.5257H15.8885C16.7993 16.5257 17.5402 15.7848 17.5402 14.874V5.4525C17.5402 4.54175 16.7993 3.80082 15.8885 3.80082ZM18.7709 5.133V15.1936C19.4775 15.0064 20 14.3616 20 13.5969V6.72964C20 5.96492 19.4775 5.32015 18.7709 5.133ZM7.38093 8.11851H12.6193V12.1488H7.38093V8.11851ZM0 6.40312V13.2703C0 14.0351 0.5225 14.6799 1.22914 14.867V4.8064C0.5225 4.99359 0 5.63839 0 6.40312Z" />
    </svg>
  ),
  user: (
    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.71426 4.28571C5.71426 1.91878 7.63304 0 9.99998 0C12.3669 0 14.2857 1.91878 14.2857 4.28571V7.14287C14.2834 9.50884 12.366 11.4262 9.99998 11.4286C7.63401 11.4262 5.71661 9.50884 5.71426 7.14287V4.28571ZM13.0828 12.8943L16.1236 13.9078C18.4399 14.6774 20.0022 16.8449 20 19.2857C20 19.6802 19.6802 20 19.2857 20H0.714301C0.319798 20 2.35899e-06 19.6802 2.35899e-06 19.2857C-0.00221583 16.8449 1.5601 14.6774 3.87644 13.9078L6.91716 12.8943C6.9899 12.8698 7.06611 12.8573 7.14287 12.8571H12.8571C12.9339 12.8573 13.0101 12.8698 13.0828 12.8943Z" />
    </svg>
  ),

  plus: (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 2C9 1.44772 8.55228 1 8 1C7.44772 1 7 1.44772 7 2V7H2C1.44772 7 1 7.44772 1 8C1 8.55228 1.44772 9 2 9H7V14C7 14.5523 7.44772 15 8 15C8.55228 15 9 14.5523 9 14V9H14C14.5523 9 15 8.55228 15 8C15 7.44772 14.5523 7 14 7H9V2Z" />
    </svg>
  ),
  dots: (
    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <circle cx="2" cy="10" r="2" />
      <circle cx="10" cy="10" r="2" />
      <circle cx="18" cy="10" r="2" />
    </svg>
  ),
};
