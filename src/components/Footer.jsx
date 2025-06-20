import { Link } from "react-router";

export default function Footer() {
    return (
      <footer className="max-w-screen">
        <div className="flex flex-wrap gap-10 justify-around py-10 text-gray-600 text-md">
          <div className="min-w-[180px] text-center">
            <h4 className="mb-2 font-semibold text-black">COMPANY</h4>
            <ul className="space-y-1">
              <li><Link to="/aboutus">About</Link></li>
              <li>Premium</li>
              <li>Blog</li>
              <li>Referral Program</li>
            </ul>
          </div>
          <div className="min-w-[180px] text-center">
            <h4 className="mb-2 font-semibold text-black">HELP AND SUPPORT</h4>
            <ul className="space-y-1">
              <li><Link to="/Contact">Contact Us</Link></li>
              <li>Knowledge Center</li>
              <li>Premium Support</li>
            </ul>
          </div>
          <div className="min-w-[180px] text-center">
            <h4 className="mb-2 font-semibold text-black">LEARNING</h4>
            <ul className="space-y-1">
              <li>Learn Hub</li>
              <li>Tutorials</li>
              <li>Communities</li>
            </ul>
          </div>
          <div className="min-w-[180px] text-center">
            <h4 className="mb-2 font-semibold text-black">RESOURCES</h4>
            <ul className="space-y-1">
              <li>Third-Party Tools</li>
              <li>Illustrations</li>
              <li>Stock Photos</li>
            </ul>
          </div>
          <div className="min-w-[180px] text-center">
            <h4 className="mb-2 font-semibold text-black">LEGAL</h4>
            <ul className="space-y-1">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>EULA</li>
            </ul>
          </div>
        </div>
  
        <div className="py-6 mt-6 text-sm text-center text-gray-500 border-t">
          <div className="flex flex-col gap-2 items-center">
            <div>
                <img src="/logo.svg" alt="Logo" className="mt-4 w-32 h-20" />
            </div>
            <div>
                © 2024 Go Business, Inc. All rights reserved.
            </div>
            <div className="flex flex-row gap-4 mt-2">
              <a href="#" className="text-gray-500">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-gray-500">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-500">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
}
  