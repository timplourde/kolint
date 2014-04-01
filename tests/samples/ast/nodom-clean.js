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
         "name": "observableThing",
         "loc": {
          "start": {
           "line": 2,
           "column": 4
          },
          "end": {
           "line": 2,
           "column": 19
          }
         }
        },
        "value": {
         "type": "CallExpression",
         "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
           "type": "Identifier",
           "name": "ko",
           "loc": {
            "start": {
             "line": 2,
             "column": 21
            },
            "end": {
             "line": 2,
             "column": 23
            }
           }
          },
          "property": {
           "type": "Identifier",
           "name": "observable",
           "loc": {
            "start": {
             "line": 2,
             "column": 24
            },
            "end": {
             "line": 2,
             "column": 34
            }
           }
          },
          "loc": {
           "start": {
            "line": 2,
            "column": 21
           },
           "end": {
            "line": 2,
            "column": 34
           }
          }
         },
         "arguments": [],
         "loc": {
          "start": {
           "line": 2,
           "column": 21
          },
          "end": {
           "line": 2,
           "column": 36
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
          "column": 36
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
        "line": 3,
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
       "line": 3,
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
     "line": 3,
     "column": 2
    }
   }
  },
  {
   "type": "FunctionDeclaration",
   "id": {
    "type": "Identifier",
    "name": "ViewModelCtor",
    "loc": {
     "start": {
      "line": 5,
      "column": 9
     },
     "end": {
      "line": 5,
      "column": 22
     }
    }
   },
   "params": [],
   "defaults": [],
   "body": {
    "type": "BlockStatement",
    "body": [
     {
      "type": "VariableDeclaration",
      "declarations": [
       {
        "type": "VariableDeclarator",
        "id": {
         "type": "Identifier",
         "name": "a",
         "loc": {
          "start": {
           "line": 6,
           "column": 8
          },
          "end": {
           "line": 6,
           "column": 9
          }
         }
        },
        "init": {
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
             "column": 12
            },
            "end": {
             "line": 6,
             "column": 14
            }
           }
          },
          "property": {
           "type": "Identifier",
           "name": "observable",
           "loc": {
            "start": {
             "line": 6,
             "column": 15
            },
            "end": {
             "line": 6,
             "column": 25
            }
           }
          },
          "loc": {
           "start": {
            "line": 6,
            "column": 12
           },
           "end": {
            "line": 6,
            "column": 25
           }
          }
         },
         "arguments": [],
         "loc": {
          "start": {
           "line": 6,
           "column": 12
          },
          "end": {
           "line": 6,
           "column": 27
          }
         }
        },
        "loc": {
         "start": {
          "line": 6,
          "column": 8
         },
         "end": {
          "line": 6,
          "column": 27
         }
        }
       }
      ],
      "kind": "var",
      "loc": {
       "start": {
        "line": 6,
        "column": 4
       },
       "end": {
        "line": 6,
        "column": 28
       }
      }
     },
     {
      "type": "ReturnStatement",
      "argument": {
       "type": "ObjectExpression",
       "properties": [
        {
         "type": "Property",
         "key": {
          "type": "Identifier",
          "name": "a",
          "loc": {
           "start": {
            "line": 8,
            "column": 8
           },
           "end": {
            "line": 8,
            "column": 9
           }
          }
         },
         "value": {
          "type": "Identifier",
          "name": "a",
          "loc": {
           "start": {
            "line": 8,
            "column": 11
           },
           "end": {
            "line": 8,
            "column": 12
           }
          }
         },
         "kind": "init",
         "loc": {
          "start": {
           "line": 8,
           "column": 8
          },
          "end": {
           "line": 8,
           "column": 12
          }
         }
        }
       ],
       "loc": {
        "start": {
         "line": 7,
         "column": 11
        },
        "end": {
         "line": 9,
         "column": 5
        }
       }
      },
      "loc": {
       "start": {
        "line": 7,
        "column": 4
       },
       "end": {
        "line": 9,
        "column": 6
       }
      }
     }
    ],
    "loc": {
     "start": {
      "line": 5,
      "column": 25
     },
     "end": {
      "line": 10,
      "column": 1
     }
    }
   },
   "rest": null,
   "generator": false,
   "expression": false,
   "loc": {
    "start": {
     "line": 5,
     "column": 0
    },
    "end": {
     "line": 10,
     "column": 1
    }
   }
  },
  {
   "type": "ExpressionStatement",
   "expression": {
    "type": "AssignmentExpression",
    "operator": "=",
    "left": {
     "type": "MemberExpression",
     "computed": false,
     "object": {
      "type": "MemberExpression",
      "computed": false,
      "object": {
       "type": "Identifier",
       "name": "ko",
       "loc": {
        "start": {
         "line": 13,
         "column": 0
        },
        "end": {
         "line": 13,
         "column": 2
        }
       }
      },
      "property": {
       "type": "Identifier",
       "name": "bindingHandlers",
       "loc": {
        "start": {
         "line": 13,
         "column": 3
        },
        "end": {
         "line": 13,
         "column": 18
        }
       }
      },
      "loc": {
       "start": {
        "line": 13,
        "column": 0
       },
       "end": {
        "line": 13,
        "column": 18
       }
      }
     },
     "property": {
      "type": "Identifier",
      "name": "foo",
      "loc": {
       "start": {
        "line": 13,
        "column": 19
       },
       "end": {
        "line": 13,
        "column": 22
       }
      }
     },
     "loc": {
      "start": {
       "line": 13,
       "column": 0
      },
      "end": {
       "line": 13,
       "column": 22
      }
     }
    },
    "right": {
     "type": "ObjectExpression",
     "properties": [
      {
       "type": "Property",
       "key": {
        "type": "Identifier",
        "name": "init",
        "loc": {
         "start": {
          "line": 14,
          "column": 4
         },
         "end": {
          "line": 14,
          "column": 8
         }
        }
       },
       "value": {
        "type": "FunctionExpression",
        "id": null,
        "params": [],
        "defaults": [],
        "body": {
         "type": "BlockStatement",
         "body": [
          {
           "type": "ExpressionStatement",
           "expression": {
            "type": "CallExpression",
            "callee": {
             "type": "MemberExpression",
             "computed": false,
             "object": {
              "type": "CallExpression",
              "callee": {
               "type": "Identifier",
               "name": "$",
               "loc": {
                "start": {
                 "line": 15,
                 "column": 8
                },
                "end": {
                 "line": 15,
                 "column": 9
                }
               }
              },
              "arguments": [
               {
                "type": "Literal",
                "value": ".james",
                "loc": {
                 "start": {
                  "line": 15,
                  "column": 10
                 },
                 "end": {
                  "line": 15,
                  "column": 18
                 }
                }
               }
              ],
              "loc": {
               "start": {
                "line": 15,
                "column": 8
               },
               "end": {
                "line": 15,
                "column": 19
               }
              }
             },
             "property": {
              "type": "Identifier",
              "name": "on",
              "loc": {
               "start": {
                "line": 15,
                "column": 20
               },
               "end": {
                "line": 15,
                "column": 22
               }
              }
             },
             "loc": {
              "start": {
               "line": 15,
               "column": 8
              },
              "end": {
               "line": 15,
               "column": 22
              }
             }
            },
            "arguments": [
             {
              "type": "Literal",
              "value": "click",
              "loc": {
               "start": {
                "line": 15,
                "column": 23
               },
               "end": {
                "line": 15,
                "column": 30
               }
              }
             },
             {
              "type": "FunctionExpression",
              "id": null,
              "params": [],
              "defaults": [],
              "body": {
               "type": "BlockStatement",
               "body": [],
               "loc": {
                "start": {
                 "line": 15,
                 "column": 44
                },
                "end": {
                 "line": 15,
                 "column": 47
                }
               }
              },
              "rest": null,
              "generator": false,
              "expression": false,
              "loc": {
               "start": {
                "line": 15,
                "column": 32
               },
               "end": {
                "line": 15,
                "column": 47
               }
              }
             }
            ],
            "loc": {
             "start": {
              "line": 15,
              "column": 8
             },
             "end": {
              "line": 15,
              "column": 48
             }
            }
           },
           "loc": {
            "start": {
             "line": 15,
             "column": 8
            },
            "end": {
             "line": 15,
             "column": 49
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
              "type": "CallExpression",
              "callee": {
               "type": "Identifier",
               "name": "$",
               "loc": {
                "start": {
                 "line": 16,
                 "column": 8
                },
                "end": {
                 "line": 16,
                 "column": 9
                }
               }
              },
              "arguments": [
               {
                "type": "Literal",
                "value": "#joe",
                "loc": {
                 "start": {
                  "line": 16,
                  "column": 10
                 },
                 "end": {
                  "line": 16,
                  "column": 16
                 }
                }
               }
              ],
              "loc": {
               "start": {
                "line": 16,
                "column": 8
               },
               "end": {
                "line": 16,
                "column": 17
               }
              }
             },
             "property": {
              "type": "Identifier",
              "name": "on",
              "loc": {
               "start": {
                "line": 16,
                "column": 18
               },
               "end": {
                "line": 16,
                "column": 20
               }
              }
             },
             "loc": {
              "start": {
               "line": 16,
               "column": 8
              },
              "end": {
               "line": 16,
               "column": 20
              }
             }
            },
            "arguments": [
             {
              "type": "Literal",
              "value": "click",
              "loc": {
               "start": {
                "line": 16,
                "column": 21
               },
               "end": {
                "line": 16,
                "column": 28
               }
              }
             },
             {
              "type": "FunctionExpression",
              "id": null,
              "params": [],
              "defaults": [],
              "body": {
               "type": "BlockStatement",
               "body": [],
               "loc": {
                "start": {
                 "line": 16,
                 "column": 42
                },
                "end": {
                 "line": 16,
                 "column": 45
                }
               }
              },
              "rest": null,
              "generator": false,
              "expression": false,
              "loc": {
               "start": {
                "line": 16,
                "column": 30
               },
               "end": {
                "line": 16,
                "column": 45
               }
              }
             }
            ],
            "loc": {
             "start": {
              "line": 16,
              "column": 8
             },
             "end": {
              "line": 16,
              "column": 46
             }
            }
           },
           "loc": {
            "start": {
             "line": 16,
             "column": 8
            },
            "end": {
             "line": 16,
             "column": 47
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
              "name": "document",
              "loc": {
               "start": {
                "line": 17,
                "column": 8
               },
               "end": {
                "line": 17,
                "column": 16
               }
              }
             },
             "property": {
              "type": "Identifier",
              "name": "getElementById",
              "loc": {
               "start": {
                "line": 17,
                "column": 17
               },
               "end": {
                "line": 17,
                "column": 31
               }
              }
             },
             "loc": {
              "start": {
               "line": 17,
               "column": 8
              },
              "end": {
               "line": 17,
               "column": 31
              }
             }
            },
            "arguments": [
             {
              "type": "Literal",
              "value": "hello",
              "loc": {
               "start": {
                "line": 17,
                "column": 32
               },
               "end": {
                "line": 17,
                "column": 39
               }
              }
             }
            ],
            "loc": {
             "start": {
              "line": 17,
              "column": 8
             },
             "end": {
              "line": 17,
              "column": 40
             }
            }
           },
           "loc": {
            "start": {
             "line": 17,
             "column": 8
            },
            "end": {
             "line": 17,
             "column": 41
            }
           }
          }
         ],
         "loc": {
          "start": {
           "line": 14,
           "column": 22
          },
          "end": {
           "line": 18,
           "column": 5
          }
         }
        },
        "rest": null,
        "generator": false,
        "expression": false,
        "loc": {
         "start": {
          "line": 14,
          "column": 10
         },
         "end": {
          "line": 18,
          "column": 5
         }
        }
       },
       "kind": "init",
       "loc": {
        "start": {
         "line": 14,
         "column": 4
        },
        "end": {
         "line": 18,
         "column": 5
        }
       }
      },
      {
       "type": "Property",
       "key": {
        "type": "Identifier",
        "name": "update",
        "loc": {
         "start": {
          "line": 19,
          "column": 4
         },
         "end": {
          "line": 19,
          "column": 10
         }
        }
       },
       "value": {
        "type": "FunctionExpression",
        "id": null,
        "params": [],
        "defaults": [],
        "body": {
         "type": "BlockStatement",
         "body": [
          {
           "type": "ExpressionStatement",
           "expression": {
            "type": "CallExpression",
            "callee": {
             "type": "MemberExpression",
             "computed": false,
             "object": {
              "type": "Identifier",
              "name": "document",
              "loc": {
               "start": {
                "line": 20,
                "column": 8
               },
               "end": {
                "line": 20,
                "column": 16
               }
              }
             },
             "property": {
              "type": "Identifier",
              "name": "getElementsByClassName",
              "loc": {
               "start": {
                "line": 20,
                "column": 17
               },
               "end": {
                "line": 20,
                "column": 39
               }
              }
             },
             "loc": {
              "start": {
               "line": 20,
               "column": 8
              },
              "end": {
               "line": 20,
               "column": 39
              }
             }
            },
            "arguments": [
             {
              "type": "Literal",
              "value": "foo",
              "loc": {
               "start": {
                "line": 20,
                "column": 40
               },
               "end": {
                "line": 20,
                "column": 45
               }
              }
             }
            ],
            "loc": {
             "start": {
              "line": 20,
              "column": 8
             },
             "end": {
              "line": 20,
              "column": 46
             }
            }
           },
           "loc": {
            "start": {
             "line": 20,
             "column": 8
            },
            "end": {
             "line": 20,
             "column": 47
            }
           }
          }
         ],
         "loc": {
          "start": {
           "line": 19,
           "column": 24
          },
          "end": {
           "line": 21,
           "column": 5
          }
         }
        },
        "rest": null,
        "generator": false,
        "expression": false,
        "loc": {
         "start": {
          "line": 19,
          "column": 12
         },
         "end": {
          "line": 21,
          "column": 5
         }
        }
       },
       "kind": "init",
       "loc": {
        "start": {
         "line": 19,
         "column": 4
        },
        "end": {
         "line": 21,
         "column": 5
        }
       }
      }
     ],
     "loc": {
      "start": {
       "line": 13,
       "column": 25
      },
      "end": {
       "line": 22,
       "column": 1
      }
     }
    },
    "loc": {
     "start": {
      "line": 13,
      "column": 0
     },
     "end": {
      "line": 22,
      "column": 1
     }
    }
   },
   "loc": {
    "start": {
     "line": 13,
     "column": 0
    },
    "end": {
     "line": 22,
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
        "line": 26,
        "column": 0
       },
       "end": {
        "line": 26,
        "column": 2
       }
      }
     },
     "property": {
      "type": "Identifier",
      "name": "applyBindings",
      "loc": {
       "start": {
        "line": 26,
        "column": 3
       },
       "end": {
        "line": 26,
        "column": 16
       }
      }
     },
     "loc": {
      "start": {
       "line": 26,
       "column": 0
      },
      "end": {
       "line": 26,
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
        "line": 26,
        "column": 17
       },
       "end": {
        "line": 26,
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
          "line": 26,
          "column": 21
         },
         "end": {
          "line": 26,
          "column": 29
         }
        }
       },
       "property": {
        "type": "Identifier",
        "name": "getElementById",
        "loc": {
         "start": {
          "line": 26,
          "column": 30
         },
         "end": {
          "line": 26,
          "column": 44
         }
        }
       },
       "loc": {
        "start": {
         "line": 26,
         "column": 21
        },
        "end": {
         "line": 26,
         "column": 44
        }
       }
      },
      "arguments": [
       {
        "type": "Literal",
        "value": "app",
        "loc": {
         "start": {
          "line": 26,
          "column": 45
         },
         "end": {
          "line": 26,
          "column": 50
         }
        }
       }
      ],
      "loc": {
       "start": {
        "line": 26,
        "column": 21
       },
       "end": {
        "line": 26,
        "column": 51
       }
      }
     }
    ],
    "loc": {
     "start": {
      "line": 26,
      "column": 0
     },
     "end": {
      "line": 26,
      "column": 52
     }
    }
   },
   "loc": {
    "start": {
     "line": 26,
     "column": 0
    },
    "end": {
     "line": 26,
     "column": 53
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
        "line": 27,
        "column": 0
       },
       "end": {
        "line": 27,
        "column": 2
       }
      }
     },
     "property": {
      "type": "Identifier",
      "name": "applyBindings",
      "loc": {
       "start": {
        "line": 27,
        "column": 3
       },
       "end": {
        "line": 27,
        "column": 16
       }
      }
     },
     "loc": {
      "start": {
       "line": 27,
       "column": 0
      },
      "end": {
       "line": 27,
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
        "line": 27,
        "column": 17
       },
       "end": {
        "line": 27,
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
          "line": 27,
          "column": 21
         },
         "end": {
          "line": 27,
          "column": 22
         }
        }
       },
       "arguments": [
        {
         "type": "Literal",
         "value": "#app",
         "loc": {
          "start": {
           "line": 27,
           "column": 23
          },
          "end": {
           "line": 27,
           "column": 29
          }
         }
        }
       ],
       "loc": {
        "start": {
         "line": 27,
         "column": 21
        },
        "end": {
         "line": 27,
         "column": 30
        }
       }
      },
      "property": {
       "type": "Literal",
       "value": 0,
       "loc": {
        "start": {
         "line": 27,
         "column": 31
        },
        "end": {
         "line": 27,
         "column": 32
        }
       }
      },
      "loc": {
       "start": {
        "line": 27,
        "column": 21
       },
       "end": {
        "line": 27,
        "column": 33
       }
      }
     }
    ],
    "loc": {
     "start": {
      "line": 27,
      "column": 0
     },
     "end": {
      "line": 27,
      "column": 34
     }
    }
   },
   "loc": {
    "start": {
     "line": 27,
     "column": 0
    },
    "end": {
     "line": 27,
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
   "line": 27,
   "column": 35
  }
 },
 "comments": [
  {
   "type": "Line",
   "value": " it's ok to have DOM manipulation inside binding handlers",
   "loc": {
    "start": {
     "line": 12,
     "column": 0
    },
    "end": {
     "line": 12,
     "column": 59
    }
   }
  },
  {
   "type": "Line",
   "value": " it's ok to have dom code when calling apply bindings",
   "loc": {
    "start": {
     "line": 24,
     "column": 0
    },
    "end": {
     "line": 24,
     "column": 55
    }
   }
  },
  {
   "type": "Line",
   "value": " hopefully this is not inside a ViewModel...",
   "loc": {
    "start": {
     "line": 25,
     "column": 0
    },
    "end": {
     "line": 25,
     "column": 46
    }
   }
  }
 ]
};