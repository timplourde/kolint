// DO NOT MODIFY, THIS WAS AUTO_GENERATED

exports.ast = {
 "type": "Program",
 "body": [
  {
   "type": "VariableDeclaration",
   "declarations": [
    {
     "type": "VariableDeclarator",
     "id": {
      "type": "Identifier",
      "name": "vm",
      "loc": {
       "start": {
        "line": 1,
        "column": 5
       },
       "end": {
        "line": 1,
        "column": 7
       }
      }
     },
     "init": {
      "type": "ObjectExpression",
      "properties": [
       {
        "type": "Property",
        "key": {
         "type": "Identifier",
         "name": "foo",
         "loc": {
          "start": {
           "line": 2,
           "column": 4
          },
          "end": {
           "line": 2,
           "column": 7
          }
         }
        },
        "value": {
         "type": "Literal",
         "value": "yes",
         "loc": {
          "start": {
           "line": 2,
           "column": 9
          },
          "end": {
           "line": 2,
           "column": 14
          }
         }
        },
        "kind": "init",
        "loc": {
         "start": {
          "line": 2,
          "column": 4
         },
         "end": {
          "line": 2,
          "column": 14
         }
        }
       },
       {
        "type": "Property",
        "key": {
         "type": "Identifier",
         "name": "bar",
         "loc": {
          "start": {
           "line": 3,
           "column": 4
          },
          "end": {
           "line": 3,
           "column": 7
          }
         }
        },
        "value": {
         "type": "Literal",
         "value": "no",
         "loc": {
          "start": {
           "line": 3,
           "column": 9
          },
          "end": {
           "line": 3,
           "column": 13
          }
         }
        },
        "kind": "init",
        "loc": {
         "start": {
          "line": 3,
          "column": 4
         },
         "end": {
          "line": 3,
          "column": 13
         }
        }
       }
      ],
      "loc": {
       "start": {
        "line": 1,
        "column": 10
       },
       "end": {
        "line": 4,
        "column": 1
       }
      }
     },
     "loc": {
      "start": {
       "line": 1,
       "column": 5
      },
      "end": {
       "line": 4,
       "column": 1
      }
     }
    }
   ],
   "kind": "var",
   "loc": {
    "start": {
     "line": 1,
     "column": 1
    },
    "end": {
     "line": 4,
     "column": 2
    }
   }
  },
  {
   "type": "ExpressionStatement",
   "expression": {
    "type": "CallExpression",
    "callee": {
     "type": "MemberExpression",
     "computed": false,
     "object": {
      "type": "Identifier",
      "name": "ko",
      "loc": {
       "start": {
        "line": 6,
        "column": 0
       },
       "end": {
        "line": 6,
        "column": 2
       }
      }
     },
     "property": {
      "type": "Identifier",
      "name": "applyBindings",
      "loc": {
       "start": {
        "line": 6,
        "column": 3
       },
       "end": {
        "line": 6,
        "column": 16
       }
      }
     },
     "loc": {
      "start": {
       "line": 6,
       "column": 0
      },
      "end": {
       "line": 6,
       "column": 16
      }
     }
    },
    "arguments": [
     {
      "type": "Identifier",
      "name": "vm",
      "loc": {
       "start": {
        "line": 6,
        "column": 17
       },
       "end": {
        "line": 6,
        "column": 19
       }
      }
     },
     {
      "type": "CallExpression",
      "callee": {
       "type": "MemberExpression",
       "computed": false,
       "object": {
        "type": "Identifier",
        "name": "document",
        "loc": {
         "start": {
          "line": 6,
          "column": 21
         },
         "end": {
          "line": 6,
          "column": 29
         }
        }
       },
       "property": {
        "type": "Identifier",
        "name": "getElementById",
        "loc": {
         "start": {
          "line": 6,
          "column": 30
         },
         "end": {
          "line": 6,
          "column": 44
         }
        }
       },
       "loc": {
        "start": {
         "line": 6,
         "column": 21
        },
        "end": {
         "line": 6,
         "column": 44
        }
       }
      },
      "arguments": [
       {
        "type": "Literal",
        "value": "app1",
        "loc": {
         "start": {
          "line": 6,
          "column": 45
         },
         "end": {
          "line": 6,
          "column": 51
         }
        }
       }
      ],
      "loc": {
       "start": {
        "line": 6,
        "column": 21
       },
       "end": {
        "line": 6,
        "column": 52
       }
      }
     }
    ],
    "loc": {
     "start": {
      "line": 6,
      "column": 0
     },
     "end": {
      "line": 6,
      "column": 53
     }
    }
   },
   "loc": {
    "start": {
     "line": 6,
     "column": 0
    },
    "end": {
     "line": 6,
     "column": 54
    }
   }
  },
  {
   "type": "ExpressionStatement",
   "expression": {
    "type": "CallExpression",
    "callee": {
     "type": "MemberExpression",
     "computed": false,
     "object": {
      "type": "Identifier",
      "name": "ko",
      "loc": {
       "start": {
        "line": 8,
        "column": 0
       },
       "end": {
        "line": 8,
        "column": 2
       }
      }
     },
     "property": {
      "type": "Identifier",
      "name": "applyBindings",
      "loc": {
       "start": {
        "line": 8,
        "column": 3
       },
       "end": {
        "line": 8,
        "column": 16
       }
      }
     },
     "loc": {
      "start": {
       "line": 8,
       "column": 0
      },
      "end": {
       "line": 8,
       "column": 16
      }
     }
    },
    "arguments": [
     {
      "type": "Identifier",
      "name": "vm",
      "loc": {
       "start": {
        "line": 8,
        "column": 17
       },
       "end": {
        "line": 8,
        "column": 19
       }
      }
     },
     {
      "type": "MemberExpression",
      "computed": true,
      "object": {
       "type": "CallExpression",
       "callee": {
        "type": "Identifier",
        "name": "$",
        "loc": {
         "start": {
          "line": 8,
          "column": 21
         },
         "end": {
          "line": 8,
          "column": 22
         }
        }
       },
       "arguments": [
        {
         "type": "Literal",
         "value": "app2",
         "loc": {
          "start": {
           "line": 8,
           "column": 23
          },
          "end": {
           "line": 8,
           "column": 29
          }
         }
        }
       ],
       "loc": {
        "start": {
         "line": 8,
         "column": 21
        },
        "end": {
         "line": 8,
         "column": 30
        }
       }
      },
      "property": {
       "type": "Literal",
       "value": 0,
       "loc": {
        "start": {
         "line": 8,
         "column": 31
        },
        "end": {
         "line": 8,
         "column": 32
        }
       }
      },
      "loc": {
       "start": {
        "line": 8,
        "column": 21
       },
       "end": {
        "line": 8,
        "column": 33
       }
      }
     }
    ],
    "loc": {
     "start": {
      "line": 8,
      "column": 0
     },
     "end": {
      "line": 8,
      "column": 34
     }
    }
   },
   "loc": {
    "start": {
     "line": 8,
     "column": 0
    },
    "end": {
     "line": 8,
     "column": 35
    }
   }
  }
 ],
 "loc": {
  "start": {
   "line": 1,
   "column": 1
  },
  "end": {
   "line": 8,
   "column": 35
  }
 },
 "comments": []
};