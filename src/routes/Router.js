import {Routes, Route } from "react-router-dom";

import React from 'react'

function Router() {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Introduction />}>
          {/* <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </div>
  )
}

export default Router