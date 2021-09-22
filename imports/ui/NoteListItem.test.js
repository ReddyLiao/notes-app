import { Meteor } from "meteor/meteor";
import React from "react";
import expect from "expect";
import { mount } from "enzyme";

import NoteListItem from "./NoteListItem";

if (Meteor.isClient) {
  describe("NoteListItem", function () {
    it("should render title and timestamp", function () {
      const title = "My title here";
      const updateAt = 1632292902966;
      const wrapper = mount(<NoteListItem note={{ title, updateAt }} />);

      expect(wrapper.find("h5").text()).toBe(title);
      expect(wrapper.find("p").text()).toBe("9/22/21");
    });

    it("should set default title if no title set", function () {
      const title = "";
      const updateAt = 1632292902966;

      const wrapper = mount(<NoteListItem note={{ title, updateAt }} />);

      expect(wrapper.find("h5").text()).toBe("Untitle note");
    });
  });
}
