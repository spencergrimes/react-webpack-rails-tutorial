import React from 'react';
import BaseComponent from 'libs/components/BaseComponent';

export default class Footer extends BaseComponent {
  render() {
    return (
      <footer className=" text-neutral-200 bg-[#222] py-8 mt-16">
        <div className="container mx-auto px-4">
            <h3 className="flex gap-4 items-center">
              <div className="w-[146px] h-[40px] bg-[url('../images/makeadifference-icon.png')] bg-contain bg-no-repeat bg-center" />
              Make a Difference
            </h3>
        </div>
      </footer>
    );
  }
}
