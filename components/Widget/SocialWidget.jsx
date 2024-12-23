import { Icon } from '@iconify/react';
import Div from '../Div';
import Link from 'next/link';

export default function SocialWidget() {
  return (
    <Div className="cs-social_btns cs-style1">
      <Link href="https://www.linkedin.com/company/letdev-ar/" className="cs-center">
        <Icon icon="fa6-brands:linkedin-in" />
      </Link>
      <Link href="https://www.instagram.com/letdev.ar/" className="cs-center">
        <Icon icon="fa6-brands:instagram" />
      </Link>
    </Div>
  );
}
